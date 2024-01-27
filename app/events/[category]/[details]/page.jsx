import React from "react";
import { Calendar } from "lucide-react";
import Image from "next/image";
function Details() {
    return (
        <>
            <div className="text-center mt-24">
                <div className="max-w-[114px] mx-auto w-full bg-primary flex justify-center py-[5px] items-center rounded-full gap-2">
                    <Calendar color="#fff" size={18} />
                    <span className="text-white text-sm">2021 year</span>
                </div>
                <h1 className="mt-4 mb-4 text-[52px] font-semibold">
                    Digital Leadership Forum
                </h1>
                <p className="max-w-[691px] w-full mx-auto text-customSilver">
                    Egestas tellus viverra sed nulla. Quisque venenatis quis odio aliquet
                    tellus dui pellentesque. Sed dictum id venenatis sed viverra aliquam
                    sapien.
                </p>
            </div>
            <div className="mt-12">
                <Image
                    className="max-w-[920px] object-cover mx-auto w-full"
                    src="/images/details.png"
                    width={920}
                    height={520}
                    alt="details images"
                    priority
                />

                <div className="max-w-[950px] mt-12 mx-auto px-[15px] w-full">
                    <div className="h-[1px] border mb-12"></div>
                    <div className="flex flex-col gap-5">
                        <p className="text-lg text-customSilver self-stretch">
                            Lorem ipsum dolor sit amet consectetur. Pharetra sed sagittis in
                            consequat fringilla amet iaculis gravida. Consectetur nulla
                            molestie viverra ut laoreet sed morbi nulla. Nunc dolor mollis
                            justo ut montes tellus. Lorem nulla mauris bibendum tincidunt
                            elementum egestas. Tellus ac tristique morbi sapien praesent
                            sapien eros. Nec mollis dictum eget enim sed.
                        </p>
                        <p className="text-lg text-customSilver self-stretch">
                            Lorem ipsum dolor sit amet consectetur. Ante morbi velit amet in.
                            Consequat viverra nunc turpis in sodales amet lectus in nisl. Nibh
                            metus sit scelerisque scelerisque. Non viverra vel dignissim
                            rutrum massa amet enim. Non pellentesque laoreet risus
                            pellentesque. Vestibulum sed vulputate est facilisi dictum ipsum
                            scelerisque. Sed euismod enim facilisis.
                        </p>
                        <p className="text-lg text-customSilver self-stretch">
                            Lorem ipsum dolor sit amet consectetur. At laoreet tincidunt
                            luctus ipsum quam velit praesent. Felis tristique ut dignissim
                            libero aliquet habitant velit. Sollicitudin placerat pellentesque
                            sit ut viverra mauris lacus tristique id. In et tincidunt sed eget
                            fames. Faucibus molestie blandit erat sed lectus id iaculis metus
                            tincidunt. Ullamcorper at diam viverra ligula et id lorem
                            faucibus. Sit scelerisque dui hendrerit urna vel. Egestas dis sed
                            posuere tempor leo nunc. Aliquam netus non in.
                        </p>
                        <p className="text-lg text-customSilver self-stretch">
                            Lorem ipsum dolor sit amet consectetur. Commodo aliquam eu amet
                            pretium venenatis. Pellentesque quis enim lacus adipiscing massa
                            in. Est ornare mauris id amet ornare in. Sollicitudin rutrum sit
                            quis risus pharetra. Id id dolor fringilla.
                        </p>
                    </div>
                </div>
            </div>
            <section className="max-w-[950px] mx-auto mt-12 px-[15px] w-full mb-24">
                <h2 className="text-customBlack text-[32px] font-semibold">
                    Lorem ipsum dolor sit amet consectetur. Penatibus elit mattis.
                </h2>
                <ul className="list-disc mt-5 ml-4">
                    <li className="text-customSilver text-lg">6 international summits</li>
                    <li className="text-customSilver text-lg">5 international forums</li>
                    <li className="text-customSilver text-lg">
                        Uzbek-Korea business program
                    </li>
                    <li className="text-customSilver text-lg">ICT Expo exhibitions</li>
                </ul>
                <p className="mt-5 text-customSilver text-lg self-stretch">
                    Lorem ipsum dolor sit amet consectetur. Consequat aliquam sapien lorem
                    ipsum. Sed aliquam consequat purus sed. Et lacinia ipsum adipiscing
                    lacus egestas diam ut faucibus. Nisi purus pharetra id eu pharetra
                    lacus id. Sed consequat eu.
                </p>

                <h3 className="mt-5 text-2xl font-semibold">
                    1. Lorem ipsum dolor sit amet consectetur. Nisi iaculis gravida
                    facilisis vestibulum.
                </h3>
                <p className="mt-5 text-customSilver text-lg self-stretch">
                    Lorem ipsum dolor sit amet consectetur. Donec eget pretium eget
                    viverra fermentum turpis amet ullamcorper elementum. Pellentesque
                    malesuada vestibulum enim nisi sit diam facilisis. Blandit quam tellus
                    vulputate tortor massa. Id eu leo sit blandit. Tortor lacus ultrices
                    sit quam ut. Amet et odio purus turpis. Malesuada mauris diam aliquet
                    venenatis. Accumsan at.
                </p>
                <h3 className="mt-5 text-2xl font-semibold">
                    2. Lorem ipsum dolor sit amet consectetur. Lectus consectetur
                    tincidunt elementum.
                </h3>
                <p className="mt-5 text-customSilver text-lg self-stretch">
                    Lorem ipsum dolor sit amet consectetur. Donec eget pretium eget
                    viverra fermentum turpis amet ullamcorper elementum. Pellentesque
                    malesuada vestibulum enim nisi sit diam facilisis. Blandit quam tellus
                    vulputate tortor massa. Id eu leo sit blandit. Tortor lacus ultrices
                    sit quam ut. Amet et odio purus turpis. Malesuada mauris diam aliquet
                    venenatis. Accumsan at.
                </p>
                <h3 className="mt-5 text-2xl font-semibold">
                    3. Lorem ipsum dolor sit amet consectetur. Lectus consectetur
                    tincidunt elementum.
                </h3>
                <p className="mt-5 text-customSilver text-lg self-stretch">
                    Lorem ipsum dolor sit amet consectetur. Ridiculus rhoncus proin
                    hendrerit ut. Ut nunc sit ac ut sed neque ut suscipit a. In vel tempus
                    dictum sed interdum mattis turpis cursus. Aliquet ipsum magna eu
                    sollicitudin. Egestas commodo ultricies a nibh pretium tellus. Leo
                    odio viverra amet laoreet eget. Amet id viverra tellus purus sit
                    faucibus bibendum nibh ut.
                </p>
                <p className="mt-5 text-customSilver text-lg self-stretch">
                    Lorem ipsum dolor sit amet consectetur. Vitae eget nulla at posuere
                    venenatis. Nibh faucibus morbi aliquam laoreet. Pulvinar pellentesque
                    et nisi sit suspendisse ut magna elit. Magna viverra nulla tortor
                    eleifend tristique tempus. Nulla nunc mauris id vulputate elementum ac
                    pellentesque. Risus integer consequat mauris quis duis integer
                    pellentesque.
                </p>
                <p className="mt-5 text-customSilver text-lg self-stretch">
                    Lorem ipsum dolor sit amet consectetur. Nunc massa vel nisl quis
                    aliquam habitasse sit ac odio. Ac et nunc faucibus vel nisl. Imperdiet
                    vulputate maecenas porttitor quam massa amet. Ac habitant varius nulla
                    et. Scelerisque senectus et facilisi maecenas ut consequat viverra.
                    Pellentesque lacus enim non vitae suspendisse sed libero mattis
                    interdum.
                </p>
            </section>
        </>
    );
}

export default Details;
