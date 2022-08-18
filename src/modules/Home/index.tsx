import { useEffect } from "react"
import { withSplashScreen } from "../../components/shared/SplashScreen/HOC/withSplashScreen"
import { useNavigate } from "../../components/shared/SplashScreen/hooks/useNavigate"
import { delay } from "../../utils/tests/delay"
import { Container } from "./styled"

export const Home = withSplashScreen(({ useManualLoad }) => {
  const load = useManualLoad()
  const navigate = useNavigate()

  useEffect(() => {
    delay(1000).then(() => {
      load()
    })
  } , [])

  return (
    <Container>
      <h1>PRINCIPAL (com delay de 1s)</h1>

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi unde tempora eum optio commodi consectetur necessitatibus numquam dolore distinctio nemo! Facilis, laudantium? Ullam, cum laudantium! Sequi consequatur velit excepturi laboriosam!</p>

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur dignissimos sequi commodi cum quae corrupti animi. Quo, autem. Deserunt adipisci est minus, ipsum deleniti rerum? Doloribus ea nam illo vero.
      Ullam qui nesciunt doloremque? Explicabo ex exercitationem dignissimos iusto vel? Voluptatum sapiente atque laboriosam impedit necessitatibus ducimus quos. Enim ut nam sapiente nostrum natus quam id harum qui ipsam eos!
      Reprehenderit repellendus porro molestias, est assumenda nostrum? Aspernatur quisquam delectus vel dolorum! Eius nisi dignissimos quam. Illum dolor doloremque dolores iure fugiat, perspiciatis perferendis ut. Non culpa amet explicabo rem!</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sint doloribus nemo quod nam repellat. Officia hic necessitatibus labore magnam vel. Recusandae voluptatibus eligendi facere expedita, enim quibusdam minus quod?
      Perferendis, aliquid dolores. Error vero dolores pariatur nostrum perspiciatis. Consectetur qui itaque cumque omnis impedit explicabo ipsa excepturi expedita, voluptates officiis nulla dolore, sed voluptas. Sed temporibus inventore optio voluptates.
      Perferendis quisquam sunt quae ducimus cupiditate, voluptas quia quidem autem optio velit laudantium hic sit molestias. Facilis maiores voluptatum, voluptatem at pariatur architecto dicta beatae, fugit molestiae, quidem culpa dignissimos.
      Sapiente error iste aliquid quasi mollitia! Iste dolores repellat ex accusantium sapiente quae distinctio rem ratione facilis veniam. Neque voluptatem ab eligendi ducimus, sapiente iste est architecto suscipit vel earum?
      Beatae, doloribus praesentium. Nostrum ut omnis vero quo odio pariatur iure reprehenderit, dolore repellendus mollitia perferendis molestiae aut blanditiis ratione autem, porro impedit modi quisquam ipsam adipisci incidunt id! Earum!
      Architecto porro tempore dignissimos totam reiciendis, temporibus maiores voluptatibus. Nostrum, voluptatem ipsam incidunt vel porro et voluptatum magnam ullam amet nobis officiis nulla quia voluptate sunt quaerat cupiditate rerum molestias.
      Magni, obcaecati officia! Tempora et blanditiis exercitationem maxime in reiciendis debitis quam rem animi sunt repellat, quia magni officiis praesentium, amet consequuntur aut? Et nesciunt atque rem molestias cum quis.
      Veritatis nemo, unde blanditiis repellendus laborum temporibus illo nulla cum consequatur, voluptas inventore aspernatur mollitia porro architecto fugiat natus doloremque eligendi fugit dolor iusto culpa labore delectus? Beatae, voluptate sit!
      Harum sint corrupti itaque repudiandae, eius nemo eligendi minima voluptas amet odit iure beatae quaerat a aliquid. Quae exercitationem eaque vel enim doloremque facere voluptate repellendus. Iusto amet maxime laudantium!
      Laboriosam temporibus nesciunt eveniet saepe magnam, quos fugiat ullam consectetur exercitationem ut pariatur voluptatem dolorum dolorem, impedit suscipit delectus sed ducimus laudantium molestias nisi! Aliquid repellendus ipsam pariatur illum quo.</p>

      <button onClick={() => navigate("/about")}>Ir para About</button>
    </Container>
  )
})
