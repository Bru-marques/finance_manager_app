import { useState } from 'react';
import Modal from 'react-modal';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

interface NewTransactionModalProps {
    isOpen: boolean,
    OnRequestClose: () => void;
}

export const NewTransactionModal = ({
     isOpen, 
     OnRequestClose}: NewTransactionModalProps) => {
    
    const [type, setType] = useState('deposit')
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    
    return(
        <Modal 
            isOpen={isOpen} 
            onRequestClose={OnRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
            >
             <button 
             className='react-modal-close'
             type='button'
             onClick={OnRequestClose}
             >
                 <img src={closeImg} alt={'Close'} />
             </button>
            
                
                
            <Container >
                <h2>New Transaction</h2>

                <input 
                type="text"
                placeholder="Title"
                value={title}
                onChange={({target}) => setTitle(target.value)} 
                />

                <input 
                type='number'
                placeholder='Value'
                value={amount}
                onChange={({target}) => setAmount(Number(target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                    type='button'
                    onClick ={() => setType('deposit')}
                    isActive={type ==='deposit'}
                    activeColor='green'
                    >
                        <img src={incomeImg} alt={'Income'} />
                        <span>Income</span>
                    </RadioBox>

                    <RadioBox
                    type='button'
                    onClick ={() => setType('deposit')}
                    isActive={type ==='deposit'}
                    activeColor='green'
                    >
                        <img src={outcomeImg} alt={'Withdraw'} />
                        <span>Withdraw</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input 
                type='text'
                placeholder='Category'
                value={category}
                onChange={({target}) => setCategory(target.value)}
                />

                <button type="submit">Submit</button>
            </Container>
        </Modal>
    )
}