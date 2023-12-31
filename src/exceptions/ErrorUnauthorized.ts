import BaseError from './BaseError';

class ErrorUnauthorized extends BaseError {
	statusCode;
	constructor(public message = 'Unauthorized') {
		super();
		this.name = 'ErrorUnauthorized';
		this.statusCode = 401;
	}
}

export default ErrorUnauthorized;
