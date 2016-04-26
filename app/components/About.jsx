import AltContainer from 'alt-container';
import React from 'react';
import { Link } from 'react-router';
import Navigation from './Navigation';
export default class Splash extends React.Component {


  render() {

    return (
      <div className="">
      <Navigation />

      <div>
      <h1>Dr. Miriam Pineles</h1>
      
      <p>Miriam Pineles is the founder and owner of Conscious Health and Wellness, Inc. She is a Diplomate in Oriental Medicine- Acupuncture & Chinese Herbal Medicine, certified by the National Certification Commission for Acupuncture and Oriental Medicine (NCCAOM) and licensed in Acupuncture by the State of NY. Miriam graduated from the Pacific College of Oriental Medicine in New York City with a Master's degree in Traditional Oriental Medicine (MSTOM). She has also studied Five-Element Acupuncture at the Tai Sophia Institute in Laurel, Maryland. Miriam is also a Birth Doula and received her certification from Sinai Hospital in Baltimore, Maryland. Miriam received her Bachelor's degree in Psychology from the University of Pennsylvania where she conducted research on matters relating to Body image and Eating disorders.</p>

        <p>Miriam exclusively practices the Acupuncture technique of Dr. Richard Tan, "The Dr. Tan Balance Method."

        Dr. Tan is a Master Acupuncturist who started his training as a young boy in Taiwan.  Dr. Tan has dedicated his life to the development of an extraordinary acupuncture strategy that reaches clinical results within seconds after needle insertion.  For his genius and innovative method, he is called "the Galileo of Chinese medicine."</p>

        <p>For more than 25 years he has devoted himself to teaching his art in Northern America and Europe and Miriam studies with him as often as possible to further her education and learn from one of the greatest practitioners alive today. Miriam's patients experience immediate relief of pain and discomfort within seconds of starting the treatment and often report elimination of symptoms within 4-6 weeks of their First appointment.
</p>
      </div>

      </div>
    );
  }
}
