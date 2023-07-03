import AWS from 'aws-sdk';
// import { DynamoDB } from 'aws-sdk';

// const REGION = 'us-east-1';
// const TABLE_NAME = 'my-table-put-crud';

// AWS.config.update({ region: REGION });

AWS.config.update({
    region: 'us-east-1',
    accessKeyId: 'AKIA6IJ7WPCGO6QWVZO2',
    secretAccessKey: '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',
  });


// const dynamodb = new DynamoDB.DocumentClient();

// const DynamoDBService = {
//   putData: async (id, data) => {
//     const params = {
//       TableName: 'my-table-put-crud', // Replace with your actual DynamoDB table name
//       Item: {
//         id: id,
//         data: data,
//       },
//     };

//     try {
//       await dynamodb.put(params).promise();
//       console.log('Data put operation successful');
//     } catch (error) {
//       console.error('Error putting data:', error);
//       throw error;
//     }
//   },

//   getAllData: async () => {
//     const params = {
//       TableName: 'my-table-put-crud', // Replace with your actual table name
//     };

//     try {
//       const response = await dynamodb.scan(params).promise();
//       return response.Items;
//     } catch (error) {
//       throw new Error('Error fetching data from DynamoDB: ' + error.message);
//     }
//   },
// };

// export default DynamoDBService;

// import AWS from 'aws-sdk';

const DynamoDBService = {
  putData: async (id, data) => {
    // Create a new DynamoDB instance
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    // Define the parameters for the put operation
    const params = {
      TableName: 'my-table-put-crud', // Replace with your actual DynamoDB table name
      Item: {
        id: id,
        data: data,
      },
    };

    try {
      // Perform the put operation
      await dynamodb.put(params).promise();
      console.log('Data put operation successful');
    } catch (error) {
      console.error('Error putting data:', error);
      throw error;
    }
  },

  getAllData: async () => {
    // Create a new DynamoDB instance
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    // Define the parameters for the scan operation
    const params = {
      TableName: 'my-table-put-crud', // Replace with your actual DynamoDB table name
    };

    try {
      // Perform the scan operation
      const result = await dynamodb.scan(params).promise();
      console.log('Data scan operation successful');
      return result.Items;
    } catch (error) {
      console.error('Error scanning data:', error);
      throw error;
    }
  },

  deleteData: async (id) => {
    // Create a new DynamoDB instance
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    // Define the parameters for the delete operation
    const params = {
      TableName: 'my-table-put-crud', // Replace with your actual DynamoDB table name
      Key: {
        id: id,
      },
    };

    try {
      // Perform the delete operation
      await dynamodb.delete(params).promise();
      console.log('Data delete operation successful');
    } catch (error) {
      console.error('Error deleting data:', error);
      throw error;
    }
  },
};

export default DynamoDBService;

