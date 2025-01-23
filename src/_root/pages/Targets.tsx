
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const riddlesAndTargets = [
  {
    riddle: `"I start small, but I grow tall,  
    I give you shade and air for all.  
    Green is my crown, roots are my feet,  
    Plant me now, and life is sweet!"`,
    target: "Plant a tree to make the world greener 🌱",
  },
  {
    riddle: `"You throw me away without a care,  
    But find me lying everywhere.  
    I clutter the ground, I make it unclean,  
    Dispose of me right, keep the earth green!"`,
    target: "Pick up litter and keep your area clean 🗑️",
  },
  {
    riddle: `"I come in bowls, I’m served on plates,  
    To end my lack, don’t hesitate.  
    I fuel your body, I fill your need,  
    Give me to those who beg and plead."`,
    target: "Feed someone in need 🍲",
  },
  {
    riddle: `"I have two legs, but walking is tough,  
    Sometimes the road feels a bit rough.  
    Hold my hand and guide me right,  
    You’ll be my hero in my sight!"`,
    target: "Help someone cross the road safely 🚦",
  },
  {
    riddle: `"I fly high, I chirp and sing,  
    In search of food, I flap my wings.  
    Some crumbs or grains will make my day,  
    Set them out, I’ll find my way!"`,
    target: "Feed the birds near your home 🐦",
  },
  {
    riddle: `"I don’t guzzle gas, I don’t pollute,  
    Two wheels or feet are my route.  
    Healthy for me and the planet too,  
    Try me today; see what I can do!"`,
    target: "Walk or bike instead of driving 🚶‍♂️🚴‍♀️",
  },
  {
    riddle: `"I sit in your home, gathering dust,  
    Once loved by you, now left to rust.  
    Give me new life, let me be used,  
    In someone else’s hands, I won’t feel bruised!"`,
    target: "Donate something you no longer use 🎁",
  },
  {
    riddle: `"I cost nothing, but I’m worth so much,  
    I brighten a day with a simple touch.  
    Say something kind, it’s not too hard,  
    Share it now, and be someone’s guard!"`,
    target: "Compliment 3 people today and make them smile 😊",
  },
  {
    riddle: `"I stay on the ground, but I’m easy to see,  
    With colors so bright, I spread positivity.  
    Write me down; make someone’s day,  
    A word or two will go a long way!"`,
    target: "Write an encouraging chalk note in your neighborhood 🖍️",
  },
  {
    riddle: `"I drink from the sky, I keep things alive,  
    Without me, it’s hard for plants to thrive.  
    Hold me in a can, pour me out slow,  
    I’ll help your garden start to grow!"`,
    target: "Water a plant or garden today 🌻",
  },
  {
    riddle: `"I shine bright when the day is done,  
    I light the dark, I’m a little sun.  
    Save me some juice, don’t leave me on,  
    Turn me off when my work is gone!"`,
    target: "Turn off unnecessary lights and save energy 💡",
  },
  {
    riddle: `"I carry water, yet I can leak,  
    Fix me up, I’m not so unique.  
    A little attention is all I need,  
    To save the water for every seed!"`,
    target: "Fix a leaky faucet or pipe 💧",
  },
  {
    riddle: `"I’m tossed away, yet I can be reborn,  
    Give me a chance; don’t leave me torn.  
    Separate me, I’ll find new use,  
    A greener future is what I produce!"`,
    target: "Recycle your waste properly ♻️",
  },
  {
    riddle: `"I’m small and green, I clean the air,  
    A pot or garden is where I’ll fare.  
    Take me in and let me grow,  
    I’ll thank you with a healthy glow!"`,
    target: "Plant an indoor plant to purify the air 🌿",
  },
  {
    riddle: `"I warm your hands on a winter's day,  
    But keep me low, don’t let me sway.  
    Too much of me can harm the air,  
    Use me wisely; show you care!"`,
    target: "Use less heating to conserve energy 🔥",
  },
  {
    riddle: `"I come in bottles, cups, or cans,  
    A reusable one is better for your plans.  
    Skip the single-use; it’s not the best,  
    Carry me along and forget the rest!"`,
    target: "Use a reusable water bottle or coffee cup 🥤",
  },
  {
    riddle: `"I come with gifts, wrapped so tight,  
    Glitter and tape make me a sight.  
    But think again, I don’t degrade,  
    Choose me wisely, don’t let waste invade!"`,
    target: "Use eco-friendly wrapping for gifts 🎁",
  },
  {
    riddle: `"I’m in the soil, I’m nature’s friend,  
    With scraps and peels, I help to mend.  
    Feed me well, and I’ll give back,  
    Rich, dark soil is what I pack!"`,
    target: "Start composting your kitchen waste 🥬",
  },
  {
    riddle: `"I live in the ocean, I swim in the sea,  
    Pollution and nets make it hard for me.  
    Pick up trash, give me a hand,  
    Help me live in a cleaner land!"`,
    target: "Join a beach or river cleanup 🌊",
  },
  {
    riddle: `"I’m made of plastic, I’m hard to see,  
    I float in waters, harming fish and tree.  
    Cut me down, reduce my reign,  
    Choose a bag that’s not a strain!"`,
    target: "Switch to reusable bags for shopping 🛍️",
  },
  // Add more riddle and target pairs as needed
];

const Targets = () => {
  return (
    <div className="flex flex-1 ">
      <div className="home-container ">
       <div className="home-posts">
        <h2 className="h3-bold md:h2-bold text-left w-full mb-6">Targets</h2>

        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 10000,
            }),
          ]}
        >
          <CarouselContent>
            {riddlesAndTargets.map((item, index) => (

              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                  <div className="post-card">
                    <CardContent className="flex flex-col items-center justify-center aspect-auto ">
                   
                      <p className="text-lg font-medium text-center text-[#dfdee4] mb-4">
                        {item.riddle}
                      </p>
                      <span className="text-2xl font-semibold text-center text-[#877EFF]">
                        {item.target}
                      </span>
                    </CardContent>
                    </div>
                  </Card>
                  </div>
              </CarouselItem>

            ))}
          </CarouselContent>


          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="bg-primary-500 p-10" style={{borderRadius: '10px'}}>
    <ul>
    <li>
      <p>
        * targets get updated weekly.
      </p>
    </li>
    <li>
      <p>
        * once you've completed some target you can post about it to earn coins
      </p>
    </li>
    <li>
      <p>
        * you are free to post about any other good deed you've done which is not on our weekly targets
      </p>
    </li>

    <li>
      <p>
        * you can also take inspiration from other users posts
      </p>
    </li>
    <br></br>
    <li>
      <p>
      "Have fun and remember, doing good feels good, doesn't it? Keep spreading kindness and making the world a better place, one step at a time!" 🌟😊
      </p>
    </li>
    </ul>
        </div>
        </div>
    </div>
    </div>
  );
};

export default Targets;
