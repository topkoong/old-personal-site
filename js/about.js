import 'jquery.scrollto';

export const setupAboutScroll = () => {

    $("#about-me").click(() => {
        let getDistanceFromTop = $(".about").offset().top;
        let distance = getDistanceFromTop - 50; // 50 here is an offet from the navbar and top margin.
        $.scrollTo(distance, 700);
    });

}