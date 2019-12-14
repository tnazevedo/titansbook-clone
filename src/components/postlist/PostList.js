import React,{Component} from 'react';
import './PostList.css';

import PostItem from '../postItem/PostItem';


class PostList extends Component{

    state = {
        posts: [
          {
            id: 1,
            author: {
              name: 'Jair da Cantareira',
              avatar: 'https://i.pravatar.cc/150?img=66'
            },
            date: '12 Dez 2019',
            content: 'Pombos atacando em Osasco, furiosos comendo cachorro quente alheio, socorro!',
            comments: [
              {
                id: 2,
                author: {
                  name: 'Robin Líder dos Titans',
                  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_zQM0OMfOg_1AdXbdF5YLhJb2yj6lNlnHG1-WBgVYdA2GntEy'
                },
                date: '12 Dez 2019',
                content:
                  'Descanse senhor, daremos um jeito nisso, titans vamos!'
              },
              {
                id: 3,
                author: {
                  name: 'Ravena',
                  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcry-Pfs9zwnWLliJqAeoHWuDv9SIvT5YG5C28qgwMUqdeXFAM'
                },
                date: '12 Dez 2019',
                content:
                  'Nós vamos jogar um jogo. É chamado de “Não Incomodem a Ravena!'
              },
              {
                id: 2,
                author: {
                  name: 'Robin Líder dos Titans',
                  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_zQM0OMfOg_1AdXbdF5YLhJb2yj6lNlnHG1-WBgVYdA2GntEy'
                },
                date: '12 Dez 2019',
                content:
                  '@Mutano, transforme-se em pombo e liberte a cidade'
              },
              {
                id: 4,
                author: {
                  name: 'Mutano',
                  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlCKsNaJdZ6zALkyj5SA-joYhTSTn-I1SXUxOY5CdeO8N2MfB5'
                },
                date: '12 Dez 2019',
                content:
                  'Natureza, porque você faz isso comigo?!'
                  
              }


            ]
          }
            
          
        ]
      };
    
    render(){
        const {posts}= this.state;
        return (

            <div className='postlist'>
                { posts.map(post=>(
                    <PostItem key={post.id} {...post}/>
                ))}


            </div>
            
        );
    }
}


export default PostList;