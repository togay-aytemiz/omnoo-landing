import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email } = body;

        if (!email) {
            return NextResponse.json(
                { success: false, error: 'Email is required' },
                { status: 400 }
            );
        }

        const googleSheetsUrl = process.env.GOOGLE_SHEETS_URL;

        if (!googleSheetsUrl) {
            console.error('GOOGLE_SHEETS_URL is not configured');
            return NextResponse.json(
                { success: false, error: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Send to Google Sheets
        const response = await fetch(googleSheetsUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        if (!response.ok) {
            throw new Error('Failed to save to Google Sheets');
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Waitlist API error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to join waitlist' },
            { status: 500 }
        );
    }
}
