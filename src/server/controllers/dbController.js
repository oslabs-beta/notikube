const db = require('../model/model');

const dbController = {};

// Middleware function that inserts cluster information passed from ConnectCluster.jsx component into the clusters table
dbController.newClusterConnection = async (req, res, next) => {

  // Grab the necessary data from the req.body
  const { userID, clusterName, clusterIP, date } = req.body;
  // Insert new cluster into clusters table
  const newClusterQuery = {
    text: 'INSERT INTO clusters (userid, clusterName, clusterIP, date) VALUES($1, $2, $3, $4)',
    values: [userID, clusterName, clusterIP, date],
  };

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