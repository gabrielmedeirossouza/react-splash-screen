import { withSplashScreen } from "../../components/shared/SplashScreen/HOC/withSplashScreen"
import { useNavigate } from "../../components/shared/SplashScreen/hooks/useNavigate"
import { Container } from './styled'

export const About = withSplashScreen(() => {
  const navigate = useNavigate()

  return (
    <Container>
      <h1>SOBRE</h1>

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi unde tempora eum optio commodi consectetur necessitatibus numquam dolore distinctio nemo! Facilis, laudantium? Ullam, cum laudantium! Sequi consequatur velit excepturi laboriosam!</p>

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur dignissimos sequi commodi cum quae corrupti animi. Quo, autem. Deserunt adipisci est minus, ipsum deleniti rerum? Doloribus ea nam illo vero.
      Ullam qui nesciunt doloremque? Explicabo ex exercitationem dignissimos iusto vel? Voluptatum sapiente atque laboriosam impedit necessitatibus ducimus quos. Enim ut nam sapiente nostrum natus quam id harum qui ipsam eos!
      Reprehenderit repellendus porro molestias, est assumenda nostrum? Aspernatur quisquam delectus vel dolorum! Eius nisi dignissimos quam. Illum dolor doloremque dolores iure fugiat, perspiciatis perferendis ut. Non culpa amet explicabo rem!</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius modi rem adipisci dolore labore, praesentium ex, atque eaque quo inventore eum voluptatum at facere velit debitis nesciunt. Fuga, nemo?
      Numquam error itaque veniam blanditiis, voluptate nulla ducimus perferendis delectus perspiciatis alias minima quas natus nisi, odit ullam! Iusto, quidem. Commodi similique velit eaque voluptatum praesentium facere maxime debitis rerum.
      Voluptas, asperiores fugiat? Amet at voluptatibus officiis dolores provident, iure, alias recusandae veniam nulla repellat inventore aliquid, optio impedit. Odit minus modi qui quam adipisci consequatur sit itaque voluptatem ipsum?
      Error nobis enim, tenetur eveniet incidunt, consectetur saepe quidem aliquid ab deleniti laborum ducimus labore impedit quo rerum voluptates modi, dolorum laboriosam perferendis. Praesentium eius porro ad nulla tempore eligendi.
      Praesentium unde qui, voluptas iste natus hic quod rerum eaque, nisi architecto sint, esse dolor asperiores perspiciatis possimus reprehenderit laborum cumque suscipit ab harum cum. Neque quo officiis amet perferendis?
      Laborum, consectetur tempora quasi eius nihil nobis sed quidem aliquid eum excepturi laudantium, amet similique fuga voluptas ex autem? Iusto, molestias. Fugiat unde sapiente repellat perspiciatis, quibusdam voluptatibus nesciunt maxime!</p>

      <button onClick={() => navigate("/")}>Ir para tela principal</button>
    </Container>
  )
})
