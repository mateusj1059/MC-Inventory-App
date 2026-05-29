export interface Projects {
    _id?: any;
    name: string;
    description?: string;
    owner: any;          // user que creó el proyecto
    members: any[];      // usuarios del proyecto
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}