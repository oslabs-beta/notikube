import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Dashboard from '../dashboard/page';
import { clusterInfo } from '../lib/homePage/clusterInfo';



// Jest does not currently support async server component testing
// // Error: Uncaught [Error: Objects are not valid as a React child (found: [object Promise]). If you meant to render a collection of children, use an array instead.]
// describe('dashboard', () => {
//   it('renders Dashboard component', () => {
//     const dashboardHeader = render(<Dashboard />);
//     expect(dashboardHeader).toMatchSnapshot();
//   });
// });

// jest.mock('../lib/homePage/clusterInfo', () => ({
//   clusterInfo: jest.fn().mockResolvedValue({ clustername: 'Test Cluster', clusterip: 12345 }),
// }));

// describe('clusterDetails', () => {
//   it('returns the correct properties', async () => {
//     let data = await clusterInfo();
//     expect(data).toHaveProperty('clustername');
//     expect(data).toHaveProperty('clusterip')
//   });
// });