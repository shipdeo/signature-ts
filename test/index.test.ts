// tests/index.test.ts
import { validate } from '../src';

const SIGNATURE_FAKE = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6Ik1uN2UwVnVLdk42ZWlUMGEiLCJjbGllbnRTZWNyZXQiOiJHVjlHYWRKYjQweTdlTDc5IiwiYXBwVHlwZSI6IkludGVncmFzaSIsImlhdCI6MTcxNjI3NzM0MSwiZXhwIjoxNzE2MjgwOTQxfQ.BDs0R_VvhbpW25_yWuzM-eVCXj2PRr6jtOeDb14R_EI";

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
