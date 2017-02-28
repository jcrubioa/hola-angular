export class User {
	firstName: string = '';
	lastName: string = '';

	cosntructor(values: Object = {}){
		Object.assign(this, values);
	}
}
