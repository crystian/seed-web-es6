import { dependency } from './dependency';

describe('should works', ()=>{
	it('work', ()=>{
		expect(dependency(true)).toBe('Works!');
	});
	it('work', ()=>{
		expect(dependency(false)).toBe('Does not work properly');
	});
});
