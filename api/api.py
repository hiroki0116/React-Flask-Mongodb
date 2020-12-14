from flask import Flask,jsonify,request
from flask_pymongo import pymongo
from flask_cors import CORS,cross_origin
import json
from bson import json_util,ObjectId

#Mongo Atlas connection
CONNECTION_STRING = "mongodb+srv://<dbname>:<password>@cluster0.upiob.mongodb.net/<dbname>?retryWrites=true&w=majority"
client = pymongo.MongoClient(CONNECTION_STRING)
db = client.get_database('<dbname>')
collection = pymongo.collection.Collection(db, 'sapporo_info')

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

'''
Database schema
# title
#description
#image
#googleMap url
'''
def parse_json(data):
    return json.loads(json_util.dumps(data))

#Get document by id 
@app.route('/api/v1/id/<string:_id>',methods=['GET'])
@cross_origin()
def show(_id):
    
    output = collection.find_one({'_id': ObjectId(_id)})
    input = parse_json(output)
    return jsonify({'result':input})

#Get all info by category 
@app.route('/api/v1/<string:category>',methods=['GET'])
@cross_origin()
def showAll(category):

    allInfo = collection.find()

    output = []
    for info in allInfo:
        if info['category'] == category:
            output.append({'_id':str(info['_id']),'category':info['category'],'title':info['title'],'description':info['description'], 'image':info['image'], 'map':info['map']})

    

    return jsonify({'result':output})

@app.route('/api/v1/create',methods=['POST'])
@cross_origin()
def create():
    
    data = request.json
    collection.insert({'category':data['category'], 'title':data['title'],
                        'description':data['description'],'image':data['image'],'map':data['map']})

    return 'Successfully Created!'

@app.route('/api/v1/update',methods=['POST'])
@cross_origin()
def update():
    data = request.json
    print(data['_id'])
    collection.update({"_id":ObjectId(data['_id'])},{ "$set":{'category':data['category'], 'title':data['title'],
                        'description':data['description'],'image':data['image'],'map':data['map']}})
    return 'Yeah'


@app.route('/api/v1/delete/<string:_id>',methods=['POST'])
@cross_origin()
def delete(_id):
    collection.delete_one({'_id': ObjectId(_id)})
    return {'Message':'Succefully Deleted'}
    

if __name__ == '__main__':
    app.run(host='0.0.0.0')
