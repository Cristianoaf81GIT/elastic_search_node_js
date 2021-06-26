const {client} = require('./lib/client')

async function run() {
    // // send head to / and verify connection
    await client.ping({
        requestTimeout: 3000,
    })
    // create index 'my-favorite-games'    
    await client.index({
        index: 'my-favorite-games',
        id: '1',
        body: {
            game: 'Skyrim V',
            publisher: 'bethesda.'
        }         
    })
    // create another item on same index
    await client.index({
        index: 'my-favorite-games',
        id: '2',
        body: {
            game: 'Doom 3',
            publisher: 'ID Software.'
        }         
    })  
    
    // create another item on same index
    await client.index({
        index: 'my-favorite-games',
        id: '3',
        body: {
            game: 'Doom 3',
            publisher: 'ID Software.'
        }         
    })  

    // update item in 'my-favorite-games' with index 2
    await client.update({
        index: 'my-favorite-games',
        id: '2',
        body: {
            doc: {
                game: 'The legend of Zelda skyward sword.',
                publisher: 'Nintendo.'
            }      
        }        
    })

    // get item index 1 from 'my-favorite-games'
    const resp = await client.get({
        index: 'my-favorite-games', 
        id: '1'
    });

    console.log(resp._source, ' retrived data')

    // // delete by index
    // const deleted = await client.delete({
    //     index: 'my-favorite-games',
    //     id: '3'
    // })

    // console.log(deleted, ' deleted')

    client.close();
}

run().catch(console.error)