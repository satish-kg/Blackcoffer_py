from typing import Union
import json

import uvicorn
from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from pydantic import BaseModel


app = FastAPI()


@app.get("/api/data")
def update_item():
    json_compatible_item_data = None
    with open('jsondata.json') as f:
        json_compatible_item_data = json.load(f)
    return JSONResponse(content=json_compatible_item_data)


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5000)