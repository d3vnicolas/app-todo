import React from 'react';
import {Wrapper, Cards, Footer, ItemsLeft, Filters, Clear} from './card';

const Card = () => {
    return (
        <Wrapper className="container">
            <Cards>

            </Cards>
            <Footer>
                <ItemsLeft>
                   5 Tarefas restantes
                </ItemsLeft>
                <Filters>
                    <li><a href="">All</a></li>
                    <li><a href="">Active</a></li>
                    <li><a href="">Completed</a></li>
                </Filters>
                <Clear href="">
                    Clear completed
                </Clear>
            </Footer>
        </Wrapper>
    );
}
 
export default Card;