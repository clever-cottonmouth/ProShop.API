const healthCheck = (req, res) => {
    try {
      res.json({ status: 'OK', message: 'HealthOk' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'Error', message: 'Internal Server Error' });
    }
  };
  export default healthCheck;