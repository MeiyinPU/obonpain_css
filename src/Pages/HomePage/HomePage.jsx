import Header from "../../composants/Header/Header.jsx";
import Footer from "../../composants/Footer/Footer.jsx";

export default function PageAccueil() {
  return (
    <div>
      <Header />
      <h2>Page Accueil</h2>

      <div>
      <img src="https://plus.unsplash.com/premium_photo-1663851785132-d0372e7801ca?q=80&w=2422&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" style={{width:"600px", height:"450px"}}/>
      </div>   

      <h4>Bienvenue</h4>
      <p className="text-sm-start mt-3">,;dnjkzbjd kjdhksj dhliJD . skjnxs h jnmiuh imsnxb sd ksbl sjb s sndihciuhfihdoirqf hifhqhfids fsoeijd ioejf ifh ihdpuisF Jnefiuh if gfimzje ciuh ziuDEH CJCHh fknckqs i hf ifqdh ic jqhfcidqhfj idch jknch iez f uifh cfkjzeh fluhfi qifuhqiluh jbduqf jckq ulh qfuiqluf flqz f dluc uLZH FL </p>
      <p className="text-sm-start mt-3">,;dnjkzbjd kjdhksj dhliJD . skjnxs h jnmiuh imsnxb sd ksbl sjb s sndihciuhfihdoirqf hifhqhfids fsoeijd ioejf ifh ihdpuisF Jnefiuh if gfimzje ciuh ziuDEH CJCHh fknckqs i hf ifqdh ic jqhfcidqhfj idch jknch iez f uifh cfkjzeh fluhfi qifuhqiluh jbduqf jckq ulh qfuiqluf flqz f dluc uLZH FL </p>

      <div>
        <button type="button" className="btn btn-primary mt-3 mb-3">Découvrir les pains</button>
      </div>

     
      <div className="d-flex justify-content-evenly mt-4">
          <div className="border bg-warning">Nouveau client ?</div>
          <div className="border bg-warning">Lieu de livraison</div>
      </div>

      <p className="text-sm-start mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda est possimus, nihil odio perspiciatis delectus? Suscipit neque eius, sint deserunt libero expedita laborum! Impedit pariatur at, eligendi nobis error quam.</p>

      <Footer />
    </div>
  );
}
