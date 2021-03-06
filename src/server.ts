import "@src/index";
import bodyParser from "body-parser";
import { Application } from "express";

import { Server } from "@overnightjs/core";

import { RegistroController } from "./controllers/registro";

export class SetupServer extends Server {
    constructor(private port = 3000) {
        super();
    }

    public init(): void {
        this.setupExpress();
        this.setupControllers();
    }

    private setupExpress(): void {
        this.app.use(bodyParser.json());
    }

    private setupControllers(): void {
        const registroController = new RegistroController();
        this.addControllers([registroController]);
    }

    public getApp(): Application {
        return this.app;
    }
}
