import Table from 'react-bootstrap/Table';
export default function History(){

    return(
        <div class="container items-center text-center">
        <h2 class="text-5xl font-bold mt-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-sky-400 p-3">History page</h2>
        <Table striped responsive className='mt-4' >
      <thead className='bg-dark text-white'>
        <tr>
          <th>Sr.No</th>
          <th>UserName</th>
          <th>BookingDate</th>
          <th>CarRgd-Number</th>
          <th>Payment</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td >Larry the Bird</td>
          <td>@twitter</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </Table>
    </div>
    );
}