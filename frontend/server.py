from typing import Union
import json

import uvicorn
from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI()


# Allow all origins to access your API (you can specify a list of origins if needed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/data")
def update_item():
    json_compatible_item_data = None
    with open('jsondata.json',"r",encoding='utf-8') as f:
        json_compatible_item_data = json.load(f)
    return JSONResponse(content=json_compatible_item_data)


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5000)