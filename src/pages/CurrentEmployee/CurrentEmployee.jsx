import Table from 'components/DataTable/DataTable';
import React from 'react';

const CurrentEmployee = () => {
    return (
        <section className='containerWrapper'>
            <article className='formHeader'>
                <h1>CURRENT EMPLOYEE</h1>
            </article>
            <span className='lineForm'/>
            <Table />
        </section>
    );
};

export default CurrentEmployee;
