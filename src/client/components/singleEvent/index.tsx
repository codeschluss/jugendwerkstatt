import React from "react";
import { useParams } from "react-router-dom";
import { useGetEventQuery } from "../../../GraphQl/graphql";
import { EventDetails } from "./eventDetails/EventDetails";
import { EventHeader } from "./eventHeader/EventHeader";
import { Slider } from "./slider/Slider";

export const SingleEvent = () => {
  const params = useParams();

  const { data, loading, error } = useGetEventQuery({
    variables: { id: params.id || "" },
  });
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <Slider imgUrl={data?.getEvent?.titleImage?.id} />
        <div className="p-5 md:w-1/2 md:ml-8 md:flex-grow rounded-md bg-white">
          <EventHeader eventName={data?.getEvent?.name || null || undefined} />
          <EventDetails
            street={data?.getEvent?.address?.street || null || undefined}
            houseNr={data?.getEvent?.address?.houseNumber || null || undefined}
            plz={data?.getEvent?.address?.postalCode || null || undefined}
            place={data?.getEvent?.address?.place || null || undefined}
            tel={data?.getEvent?.organizer?.phone || null || undefined}
            email={data?.getEvent?.organizer?.mail || null || undefined}
            web={data?.getEvent?.organizer?.website || null || undefined}
            group={data?.getEvent?.organizer?.name || null || undefined}
            schedule={
              data?.getEvent?.schedules && data?.getEvent?.schedules[0]?.endDate
            }
            startDate={
              data?.getEvent?.schedules &&
              data?.getEvent?.schedules[0]?.startDate
            }
            theRest={data?.getEvent?.category?.name || null || undefined}
            description={data?.getEvent?.description || null || undefined}
          />
        </div>
      </div>
      <div className="hidden md:block p-5 rounded-md bg-white mt-8">
        <p className="text-3xl">{data?.getEvent?.name}</p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, sapien
        pretium mauris, neque tincidunt nam libero mattis eu. Eget amet, enim
        ullamcorper nunc id placerat pharetra. Varius enim posuere id fringilla.
        In tempus malesuada eget sed elementum quisque molestie pharetra.
        Aliquam at duis non elit erat urna, et. Consectetur sed faucibus cras
        aliquam. Fames luctus aliquet ullamcorper elit pellentesque. Ut
        tincidunt sapien nec, pellentesque nunc est ut. Blandit mollis iaculis
        ut sed non odio volutpat. Venenatis, eget scelerisque ac nunc,
        vestibulum quis viverra diam. Mollis molestie integer elit sed netus
        scelerisque tristique. Convallis lacus facilisis volutpat nunc integer
        sagittis. Ipsum accumsan, vitae venenatis amet, erat pellentesque.
        Varius nam vitae pretium ut. Semper convallis amet, nunc in tortor, sit
        enim iaculis nibh. Pharetra aliquam tincidunt porttitor nulla in blandit
        in vestibulum. Consectetur id mauris vitae posuere nunc, semper tempus
        justo. At ultrices pellentesque nec enim vulputate eget pulvinar.
        Facilisi tempor viverra enim egestas. Cras ipsum, vitae turpis nunc,
        tincidunt tellus imperdiet turpis ultricies. Dolor tortor eu laoreet
        neque, morbi. Faucibus aliquam et, vel ut massa tristique ut et sit.
        Convallis luctus vestibulum sed risus aenean. Nulla aliquam est sit nam
        in. Nisl tellus curabitur fringilla sollicitudin. Purus amet mi pharetra
        aliquet pretium aliquet mauris feugiat nec. Suspendisse sed fringilla
        aliquet purus. Ac nulla donec pellentesque enim. Morbi massa auctor
        mattis consequat pharetra. In integer dignissim tempus ullamcorper
        pulvinar senectus in in sed. Molestie purus mi aliquet luctus nibh
        viverra eleifend condimentum lorem. Velit ornare enim consectetur est.
        Enim, sodales bibendum at sed sem. Enim sit aliquam iaculis venenatis
        eget congue ornare leo scelerisque. Aliquam ultrices proin id egestas
        enim bibendum malesuada in et. Iaculis integer neque, bibendum massa
        eget duis sed condimentum. Morbi euismod ac magna egestas nibh quis id
        vitae mauris. A tellus gravida enim, ultrices diam eu tellus quis purus.
        Ut dolor pharetra dui phasellus. Nunc justo, elit, euismod volutpat
        viverra. In molestie a sit suspendisse consequat a orci tempus neque.
        Eget pretium arcu, eu sit tempor aliquam, duis. Nam sem aenean fermentum
        molestie proin. Risus amet, amet ultrices nulla libero aenean. Lobortis
        vel egestas suspendisse molestie massa nunc dictum. Posuere eget
        commodo, volutpat proin enim, enim nulla. Mattis urna, egestas viverra
        accumsan. Sed accumsan, quam id eu leo. Lacinia in elementum tellus sed
        rutrum urna, volutpat ipsum. Aliquet sed ultrices viverra amet. Odio
        ultricies tellus egestas egestas in ridiculus egestas sed. Vitae
        habitant at facilisis volutpat. Metus imperdiet eget auctor enim id
        dolor. Non purus platea nibh enim quis et, egestas. Non eros posuere a
        eu velit. Tincidunt ipsum tincidunt nulla massa nunc. Vel feugiat porta
        at dui ornare id mauris, ullamcorper imperdiet. Nulla donec est id
        mattis. Aliquet tempus, nascetur cursus ut ipsum diam sagittis felis.
        Orci fermentum bibendum et lacus, nam tincidunt ac. Tincidunt hac elit
        gravida consectetur vulputate eget. Condimentum maecenas in a volutpat
        fusce facilisis. Pulvinar leo ultricies aliquam auctor nunc rhoncus,
        varius. Amet eget amet rutrum ultrices hendrerit ipsum id feugiat.
        Pretium, feugiat id nulla morbi donec venenatis fermentum facilisis.
        Commodo nisl volutpat lacus, porttitor at. Tortor lectus diam senectus
        faucibus nisl metus faucibus tincidunt cursus. Viverra at facilisis
        feugiat leo morbi sagittis at. Id tellus fusce pellentesque sem. Eget
        consectetur tincidunt bibendum eget varius sollicitudin. In molestie
        laoreet habitasse aliquet nunc, vel enim felis. Tortor erat aenean nibh
        mauris amet, urna. Volutpat nunc velit, morbi in et tortor, fames nunc.
        Elementum semper nulla maecenas viverra euismod elementum egestas. Massa
        vel interdum malesuada commodo et id tempor, venenatis. Volutpat magna
        semper aliquet ipsum tristique. Leo cum porta est tortor. Quis vivamus
        cursus sed sapien, phasellus curabitur. Ac velit venenatis arcu eget
        ultricies tempus ornare tellus. Consectetur egestas in quis consectetur
        varius integer. Blandit nec eu ultrices.
      </div>
    </div>
  );
};
