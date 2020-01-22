import React from 'react';
import { Container } from './styles';
import { Progress, Chart } from '../../components';
import api from '../../services/api';

export default function Dashboard() {
  const [progress, setProgress] = React.useState([]);
  const [chart, setChart] = React.useState([]);

  React.useEffect(() => {
    /**
     * Loading progress cards in dashboard
     */
    async function loadProgress() {
      const { data } = await api.get('/progress');

      setProgress(data);
    }

    async function loadChart() {
      const { data } = await api.get('/trendings');

      setChart(data);
    }

    loadProgress();
    loadChart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Progress data={progress} />
      <Chart
        type='pie'
        title='Tendência de vendas'
        height='300px'
        data={`${chart.map(({ data }) => `\n${data.title}, ${data.value}`)}`}
      />
    </Container>
  );
}
