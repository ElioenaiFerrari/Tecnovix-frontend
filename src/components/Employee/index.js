import React from 'react';
import { Container } from './styles';
import api from '../../services/api';

const Employee = React.memo(() => {
  const [employee, setEmployee] = React.useState([]);

  React.useEffect(() => {
    async function loadEmployee() {
      const { data } = await api.get('/employees');

      setEmployee(data);
    }

    loadEmployee();
  }, []);
  return (
    <Container>
      {employee.map(emp => (
        <div>
          <h2>{emp.name}</h2>
          <p>{emp.career}</p>
        </div>
      ))}
    </Container>
  );
});

export default Employee;
