const db = require('../model/model');

const dbController = {};

// Middleware function that inserts cluster information passed from ConnectCluster.jsx component into the clusters table
dbController.newClusterConnection = async (req, res, next) => {

  // Grab the necessary data from the req.body
  const { clusterName, clusterIP } = req.body;
  // Insert new cluster into clusters table
  const newClusterQuery = {
    text: 'INSERT INTO clusters (clusterName, clusterIP ) VALUES($1, $2)',
    values: [clusterName, clusterIP],
  };

  // Query the database and put the data into the clusters table
  try {
    db.query(newClusterQuery)
      .then(() => 'Data successfully added to database');
    next();
  } catch (err) {
    return next({
      log: `dbController.newClusterConnection: ERROR: ${err}`,
      message: { err: 'Error occurred in dbController.newClusterConnection. Check server logs for more details.'},
      status: 500
    });
  }
};

module.exports = dbController;