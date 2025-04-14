import { json, type RequestEvent, type RequestHandler } from '@sveltejs/kit';
import { google } from 'googleapis';
import { env } from '$env/dynamic/private';

export const GET: RequestHandler = async (event: RequestEvent): Promise<Response> => {
  const session = await event.locals.auth();

  const accessToken = session?.user?.id; // 一旦

  const auth = new google.auth.OAuth2();
  auth.setCredentials({ access_token: accessToken });

  const sheets = google.sheets({ version: 'v4', auth });

  const spreadsheetId = env.SPREAD_SHEET_ID;
  const spreadSheetName = env.SPREAD_SHEET_NAME;
  const range = `${spreadSheetName}!A1:D3`; // 読み取りたい範囲

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range
    });

    return new Response(JSON.stringify(response.data.values), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error(error);
    return new Response('Failed to fetch spreadsheet data', { status: 500 });
  }

  return json({ message: 'ok' });
};
