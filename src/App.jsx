import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="CJ"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, consequuntur autem inventore obcaecati accusantium fugiat architecto magnam illum, rerum et aliquid nam beatae similique asperiores eveniet nulla provident ad excepturi?"
          />
          <Post
            author="TESTE"
            content="Teste"
          />
        </main>
      </div>
    </div>
  )
}

export default App;