import axios from 'axios';

// ❌ Hardcode secrets
const API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.INSECURE';

const HardcodedSecrets = async () => {
  await axios.get('http://localhost:8000/api/admin', {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
};

export default HardcodedSecrets;
