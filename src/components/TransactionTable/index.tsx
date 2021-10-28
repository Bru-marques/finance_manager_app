import { Container } from './styles';

export function TransactionTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Website development</td>
                        <td className='deposit'>$12.000</td>
                        <td>Freelancer</td>
                        <td>20/02/21</td>
                    </tr>
                    <tr>
                        <td>Rent</td>
                        <td className='withdraw'> - $1.000</td>
                        <td>House</td>
                        <td>2/02/21</td>
                    </tr>
                    <tr>
                        <td>Website development</td>
                        <td className='deposit'>$12.000</td>
                        <td>Freelancer</td>
                        <td>20/02/21</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}