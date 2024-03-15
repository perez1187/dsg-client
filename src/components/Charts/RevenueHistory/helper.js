import { getAxiosInstance } from '../../../services/baseAxios';

export async function getAgentResultSummary() {
  const axios = getAxiosInstance();
  const res = await axios.get('/results/agent-result-summary/', {
    headers: {
      Authorization: 'Bearer ' + process.env.REACT_APP_TEMP_BEARER_TOKEN,
    },
  });
  return res.data;
}

export const transformData = (data) => {
  return data.map((item) => {
    const formattedDate = item.date__report_date.replace(/-/g, '/');
    return {
      name: formattedDate,
      revenue: item.profit_loss_USD,
    };
  });
};
