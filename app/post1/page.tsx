import Image from "next/image";
import homeCardImage1 from "../../public/assets/ss.jpg";
import * as Icons from "react-icons/bs";
import Link from "next/link";

const PostPage = () => {
  return (
    <section className="scrollable flex h-screen min-h-screen w-full flex-col items-center justify-between gap-4 overflow-y-auto">
      {/* The Top Section */}
      <div className="relative flex h-56 w-full bg-gray-200">
        <Image
          src={homeCardImage1}
          className="h-full w-full"
          alt="card image"
        />
        {/* The Overlay */}
        <div className="absolute z-20 flex h-full w-full items-start justify-between gap-4 bg-black/30 px-2 py-3 text-white">
          <Link href="/">
            <Icons.BsArrowLeft className="h-5 w-5" />
          </Link>
          <Icons.BsShare className="h-5 w-5" />
        </div>
      </div>
      {/* The Page Content */}
      <div className="flex w-full flex-col items-center justify-between gap-4 px-2">
        {/* The Exerpt */}
        <p className="flex w-full items-center justify-start gap-2 font-semibold">
          first lady lobbies unaids to fund <br /> HIV prevention programme
        </p>
        {/* The Meta Info */}
        <div className="mb-4 flex w-full items-center justify-between gap-4 text-sm">
          <div className="flex w-full items-center justify-start gap-2 text-sm">
            <Icons.BsPersonCircle className="h-8 w-8 text-gray-600" />
            <div className="flex flex-col items-start justify-between gap-1">
              <span className="flex text-blue-600">Admin</span>
              <span className="flex text-gray-600">@ministry</span>
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 text-sm">
            <Icons.BsClock className="h-5 w-5 text-gray-500" />
            <span className="text-gray-500">2hr ago</span>
          </div>
        </div>
        {/* The Content */}{" "}
        <div className="flex w-full items-center justify-between gap-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ullam
          quae quibusdam amet quo, facilis molestiae eum, fugiat aliquid fuga
          impedit explicabo expedita pariatur laboriosam necessitatibus officiis
          quasi ex dolor accusantium nobis dolore. Corporis eaque cum
          voluptatum, soluta in amet, adipisci delectus deleniti, quasi atque
          vel? Aliquam accusantium est fuga perspiciatis, consequuntur
          laudantium enim placeat magnam ab, quod sit amet recusandae temporibus
          vel similique numquam deserunt dolorum soluta saepe expedita! Quas id
          excepturi accusamus eaque nemo tempora ullam qui consectetur velit
          sunt, illum officia. Alias est, aliquam sapiente ad provident sed
          voluptatum esse fugiat voluptates reprehenderit numquam temporibus
          odit veniam eligendi quos minus similique vitae aspernatur corrupti a
          libero enim. Provident blanditiis autem voluptas ut architecto
          deleniti magnam iste. Quis fugiat officiis dolorum veritatis officia
          a, ut nemo obcaecati. Explicabo saepe repudiandae labore modi, ipsam
          nemo excepturi ex, error tempora autem, rerum accusamus doloremque. In
          quisquam provident quod natus eos dolor veritatis, quibusdam
          laudantium sunt autem rerum voluptate exercitationem praesentium
          deserunt minus sint assumenda neque explicabo esse, dolorum a error
          consequatur illum laborum. Rem iure modi expedita? Maiores eos debitis
          sed. Modi libero dignissimos quae quis voluptate. Nesciunt, impedit
          repellat. Laboriosam labore dolore doloribus totam error cum placeat
          consequuntur esse repudiandae necessitatibus, sed corrupti, veniam
          distinctio repellat nesciunt impedit ipsa tempore odit ex possimus
          quos praesentium, velit atque modi? Ratione soluta voluptatibus
          debitis doloremque cum totam placeat dolor dignissimos magnam harum
          facere modi labore asperiores corporis dolorum error quos voluptate
          architecto accusantium, quod sint! Nulla eligendi reiciendis
          dignissimos nostrum possimus sapiente est illo, ratione molestias
          praesentium architecto impedit quos neque corporis quaerat fuga saepe
          eius? Molestias esse non, ad sapiente maiores fuga, architecto dolorum
          assumenda hic veritatis reprehenderit provident recusandae beatae
          eveniet aliquam obcaecati dolor id, delectus aliquid ea placeat
          suscipit. Molestiae, autem minus rem dolor placeat quae non culpa
          necessitatibus velit cupiditate cum quasi, veritatis fugiat
          exercitationem porro consequatur hic natus facilis beatae explicabo
          quis odio recusandae. Voluptate quasi, recusandae omnis consequuntur
          quaerat quo itaque harum nemo maxime pariatur eaque magni nostrum
          culpa minus veniam distinctio in, commodi cupiditate dicta deserunt!
          Odio nemo ratione beatae. Maiores possimus sunt dolores perspiciatis
          blanditiis nam quis sit debitis! Amet veniam nam voluptatum delectus
          repellat! Consequuntur explicabo, molestias voluptates doloribus,
          sapiente mollitia dicta ad eius ab dolor eaque accusantium. Aliquam id
          dicta eaque eum maxime voluptatum accusamus natus vitae temporibus ea
          suscipit atque neque quasi asperiores quae, perspiciatis dolorum
          voluptate deleniti vero mollitia repellat eos placeat. At accusamus
          ipsa doloribus, nihil ducimus non dolorum consectetur, perferendis
          eaque pariatur animi molestias. Maxime maiores eius consequuntur,
          dolor dolorem dolorum quidem voluptate ullam quo amet eligendi a in
          commodi alias? Fuga illum nisi inventore laboriosam itaque, atque
          esse, perferendis voluptatum hic facere eveniet officiis fugiat soluta
          ipsum placeat explicabo incidunt? Sed neque consectetur eius
          distinctio, doloribus iste asperiores debitis. Pariatur asperiores
          ullam tenetur rerum. Assumenda aliquid odit laboriosam accusantium,
          incidunt iusto aspernatur nulla sunt beatae earum distinctio? Iure
          odit minus, praesentium ullam ad quasi iusto doloribus? Odio est
          quisquam dolorum culpa non totam vitae tempora incidunt.
        </div>
      </div>
    </section>
  );
};

export default PostPage;
