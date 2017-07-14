import { Injectable } from '@angular/core';
import { IFaq } from './faq'

@Injectable()
export class FaqService {

   getQuestions():IFaq[]{
     return [
         {
             
            "question": "What is a Bass?",
            "answer": "Sea bass is a common fish name. Many fish species of various families have been called sea bass."

         },
         {
             "question": "What is a Sardines (Pilchards)",
                "answer": "The terms 'sardine' and 'pilchard' are not precise, and what is meant depends on the region. The United Kingdom's Sea Fish Industry Authority, for example, classifies sardines as young pilchards. One criterion suggests fish shorter in length than 15 cm (6 in) are sardines, and larger fish are pilchards."
         },
         {
             "question": "What is a Trout?",
                "answer": "Trout is the common name for a number of species of freshwater fish belonging to the genera Oncorhynchus, Salmo and Salvelinus, all of the subfamily Salmoninae of the family Salmonidae. The word trout is also used as part of the name of some non-salmonid fish such as Cynoscion nebulosus, the spotted seatrout or speckled trout.",
         },
         {
             "question": "What is a Haddock?",
                "answer": "Haddock is most commonly found at depths of 40 to 133 m (131 to 436 ft), but has a range as deep as 300 m (980 ft). It thrives in temperatures of 2 to 10 °C (36 to 50 °F). Juveniles prefer shallower waters and larger adults deeper water. Generally, adult haddock do not engage in long migratory behaviour as do the younger fish, but seasonal movements have been known to occur across all ages. ",
         },
         {
             "question": "What is a Brill (Scophthalmidae)?",
                "answer": "Brill have slender bodies, brown covered with lighter and darker coloured flecks, excluding the tailfin; the underside of the fish is usually cream coloured or pinkish white. Like other flatfish the brill has the ability to match its colour to the surroundings. Brill weigh up to 8 kg (18 lb) and can reach a length of 75 cm (2 ft 6 in), but are less than half that on average. Part of the dorsal fin of the fish is not connected to the fin membrane, giving the fish a frilly appearance. They are sometimes confused with the turbot (Psetta maxima), which is more diamond-shaped",
         }
     ]
   }
}