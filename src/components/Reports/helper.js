import { getAxiosInstance } from '../../services/baseAxios';

export async function getAgentResultDetils() {
  const axios = getAxiosInstance();
  const res = await axios.get('/results/agent-results-details/', {
    headers: {
      Authorization: 'Bearer ' + process.env.REACT_APP_TEMP_BEARER_TOKEN,
    },
  });
  return res.data;
}

export const transformDataDetails = (data) => {
  return data?.map((item) => {
    return {
      id: item.id,
      players: item.nickanme_id,
      nickname: item.nickname_name,
      agents: item.agent_name,
      profitLoss: '$ ' + item.profit_loss_USD,
      rake: '$ ' + item.rake_USD,
      deal: item.deal,
      rakeback: '$ ' + item.rb_USD,
      agentSettlement: '$ ' + item.agent_settlement_USD,
      action: '',
    };
  });
};

export async function getAgentResultDetilsSummary() {
  const axios = getAxiosInstance();
  const res = await axios.get('/results/agent-results-details-summary/', {
    headers: {
      Authorization: 'Bearer ' + process.env.REACT_APP_TEMP_BEARER_TOKEN,
    },
  });
  return res.data;
}

export const transformDataDetailsSummaryByClud = (data) => {
  return data?.map((item, index) => {
    return {
      id: index,
      name: item.club_name,
      profitLoss: '$ ' + item.profit_loss_USD,
      rake: '$ ' + item.rake_USD,
      deal: item.deal,
      rakeback: '$ ' + item.rb_USD,
      agentSettlement: '$ ' + item.agent_settlement_USD,
      action: '',
    };
  });
};

export const transformDataDetailsSummaryByAgent = (data) => {
  return data?.map((item, index) => {
    return {
      id: index,
      name: item.club_name,
      agents: item.agent_name,
      profitLoss: '$ ' + item.profit_loss_USD,
      rake: '$ ' + item.rake_USD,
      deal: item.deal,
      rakeback: '$ ' + item.rb_USD,
      agentSettlement: '$ ' + item.agent_settlement_USD,
      action: '',
    };
  });
};
