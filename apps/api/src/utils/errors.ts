export class UnauthorizedException extends Error {
    code = "UNAUTHORIZED";
    status = 401;
    constructor(message?: string) {
        super(message ?? "You are not authorized to access this resource.");
        this.name = "UNAUTHORIZED";
    }
}

export class ForbiddenException extends Error {
    code = "FORBIDDEN";
    status = 403;
    constructor(message?: string) {
        super(message ?? "You do not have access rights to this resource. Please check your permissions.");
        this.name = "FORBIDDEN";
    }
}


export class BadRequestException extends Error {
    code = "BAD_REQUEST";
    status = 400;
    constructor(message?: string) {
        super(message ?? "The request is invalid. Please check the data you've entered.");
        this.name = "BAD_REQUEST";
    }
}
