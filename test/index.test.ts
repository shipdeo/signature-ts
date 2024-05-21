// tests/index.test.ts
import { validate } from '../src';

const SIGNATURE_FAKE = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6IlVBeDNvcjZmQ2dURFRpM2QiLCJjbGllbnRTZWNyZXQiOiJoUHZzTThoVmZaZnJjdmpRIiwiYXBwVHlwZSI6IkludGVncmFzaSIsImlhdCI6MTcxNjI4MjI2OCwiZXhwIjoxNzE2Mjg1ODY4fQ.9vPAX1ztXK7e4wsb_69YbIWJMHIa1ye6M2Y1MX2Y-2s";

describe("index.ts", () => {
    test('Signature return payload not null!', () => {
        const payload = validate(SIGNATURE_FAKE, "Integrasi");
        expect(payload).not.toBe(null);
    });

    test('Signature return payload and have clientId!', () => {
        const payload = validate(SIGNATURE_FAKE, "Integrasi");
        expect(payload.clientId).not.toBe(null);
    });

    test('Signature return payload and have clientSecret!', () => {
        const payload = validate(SIGNATURE_FAKE, "Integrasi");
        expect(payload.clientSecret).not.toBe(null);
    });

    test('Signature return payload and have appType!', () => {
        const payload = validate(SIGNATURE_FAKE, "Integrasi");
        expect(payload.appType).not.toBe(null);
    });

})
