export interface ICarQuery {
    id: number;
    year: number;
    modelMakeId: number;
    modelName: string;
    modelTrim: string;
    modelEngineCC: number;
}

// model_id
// model_make_id by model_year
// model_name by model_year & model_make_id
// model_trim by model_year & model_make_id & model_name
// model_engine_cc by model_trim
