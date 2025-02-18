import { greet } from "./greet";

describe ('greet', () => {
    it('it should include the name in the message', () => {
        expect(greet('Oran')).toContain('Oran');
    });

    it('should not include the name in the message', () => {
        expect(greet('Oran')).not.toContain('Frank');
    });
});