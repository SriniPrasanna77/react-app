import React from 'react'

const Searchbox = ({ event }) => {

    return (
        <>
            <div className='pa2'>
                <input 
                    className='pa3 ba b--green bg-lightest-blue' 
                    type='search' 
                    placeholder='search robots' 
                    onChange={event}
                />
            </div>            
        </>
    ) 
}

export default Searchbox;