(function(){
var app = angular.module("grandVoyageApp",['ngSanitize']);
var poeme=[
	{
		idPoeme:1,
		idStrophe:1,
		strophe:"<p>… sera lu dans un futur qui peut-être<br>n’existera pas ; il glisse sur l’écume<br/>de glaciers qui fondent. Ce que tu écris<br/>appartient au passé qui a toujours paru,<br/>depuis le temps du serpent, innocent.</p>",
		stropheGr:"<p>… θα διαβαστεί σ’ ένα μέλλον που ίσως<br>δεν υπάρξει ποτέ. Γλιστρά στον αφρό<br/>παγετώνων που λιώνουν· ό,τι γράφεις<br/>ανήκει σ’ ένα παρελθόν που έμοιαζε<br/>πάντα, απ’ τον καιρό του φιδιού, αθώο.</p>"
	},
	{
		idPoeme:1,
		idStrophe:2,
		strophe:"<p>Impuissante main sur des touches sans son,<br>regard vide sur l’écran, nostalgie<br/>du piano qui émeut la corde. Non, j’insiste,<br/>le clavier électrique, c’est différent :<br/>cette vérité, au moins, reconnais-la.</strong></p>",
		stropheGr:"<p>Άδειο χέρι σε πλήκτρα δίχως ήχο,<br>βλέμμα κενό στην οθόνη νοσταλγεί<br/>το πιάνο, που συγκινεί τη χορδή.<br/>Όχι, το ηλεκτρικό κλαβιέ διαφέρει:<br/>μία τουλάχιστον αλήθεια ας δεχτείς.</strong></p>"
	},
	{
		idPoeme:1,
		idStrophe:3,
		strophe:"<p>Qu’elle arrive vite, l’heure où bat<br/>sans distinction un rythme pour un autre,<br/>une phrase pour une autre ; des doigts<br/>sans cals tracent une musique comme<br/>un souvenir étranger, et la phrase fuit</p>",
		stropheGr:"<p>Πώς έφτασε έτσι ραγδαία η ώρα,<br/>ένας ρυθμός αντ’ άλλου αδιακρίτως<br/>να χτυπά, μια φράση αντ’ άλλης· δάχτυλα<br/>δίχως κάλους να γράφουν μουσική σαν<br/>ξένη ανάμνηση κι η φράση να φεύγει</p>"
	},	
	{
		idPoeme:1,
		idStrophe:4,
		stropheGr:"<p>τις έννοιες σ’ έναν άναρθρο καιρό<br/>συνωνύμων. Έφτασ’ έτσι ραγδαία<br/>του δικτάτορα η ώρα στην ψυχή<br/>καθενός: δεν κυβερνά με τη βία,<br/>συγχέει εγωισμό κι αυτογνωσία,/p>",
		strophe:"<p>le sens dans une ère inarticulée<br/>de synonymes. Elle arrive vite,<br/>l’heure du dictateur dans l’âme de chacun :<br/>lui ne gouverne pas par la violence,<br/>il confond égoïsme et connaissance</p>"		
	},
	{
		idPoeme:1,
		idStrophe:5,
		stropheGr:"<p>εξωραΐζει την αλαζονεία,<br/>πίνει πετρέλαιο αντί για νερό.<br/>Ό,τι γράφεις την ώρα που θάρρεψε<br/>πως γνωρίζει αρκετά και σκοτώνει<br/>το δάσκαλο, την ώρα που αγνοεί</p>",
		strophe:"<p>de soi, il magnifie l’arrogance<br/>et boit du pétrole à la place de l’eau.<br/>Ce que tu écris à l’heure qui croit<br/>en savoir assez pour tuer le maître,<br/>à l’heure qui élude l’ascèse du besoin,</p>"
	},	
	{
		idPoeme:1,
		idStrophe:6,
		strophe:"<p>neutralise l’âme, évacue la passion,<br/>ce que tu écris appartient<br/>à un âge sans lendemain.</p>",		
		stropheGr:"<p>της ανάγκης την άσκηση, αδρανεί<br/>την ψυχή κι αποβάλλει το πάθος,<br/>ανήκει σ’ έναν καιρό δίχως αύριο.</p>",
	},	
	{
		idPoeme:1,
		idStrophe:7,
		strophe:"<p>Mais le temps donne à sentir à l’homme<br/>ce qui advient autre part, autre fois.</p>",
		stropheGr:"<p>Μα ο χρόνος επιτρέπει στον άνθρωπο<br/>να νιώθει τι συμβαίνει άλλοτε κι αλλού.</p>"	
	},	
	{
		idPoeme:2,
		idStrophe:1,
		partie:"I",
		strophe:"<p>Comment mouillera-t-il, ce bateau,<br/>attaché qu’il est sur la grève ? Où ira-t-il<br/>maintenant que les vents sont paralysés ?<br/>Regarde le gros temps qui approche ;<br/>la nuit tombe et la rampe est trempée.</p>",
		stropheGr:"<p>Πώς θα σαλπάρει τούτο το καράβι,<br/>καθώς το δέσαν έτσι στο γιαλό; Πού<br/>θα τραβήξει σαν έχουν οι ανέμοι<br/>παραλύσει; Bαρύς καιρός σιμώνει<br/>και σαν νυχτώνει, βρεμένη η κουπαστή.</p>"	
	},
	{
		idPoeme:2,
		idStrophe:2,
		strophe:"<p>Ces voiles que personne ne rapièce<br/>sont par la tempête battues, déchirées.<br/>Mille fois je te l’ai dit, capitaine,<br/>prends des mesures, retrousse tes manches.<br/>Il est à toi, ce vaisseau, il n’obéit</p>",
		stropheGr:"<p>Mα το πανί κανείς δεν το μπαλώνει<br/>κι ας τώχει άγρια δείρει ο χαλασμός.<br/>Xίλιες φορές σου τώπα, καπετάνιε,<br/>μέτρα να λάβεις, να ανασκουμπωθείς.<br/>Δικό σου είναι το σκαρί που μόνο</p>"
	},
	{
		idPoeme:2,
		idStrophe:3,
		strophe:"<p>qu’à tes ordres. Si tu viens d’embarquer<br/>une charge lourde, à long cours, rappelle-toi<br/>qu’il n’écoute que toi, ce bateau.<br/>Lors d’une mission secrète il a seul<br/>pris la mer, sans marin, sans commandant,</p>",
		stropheGr:"<p>σύ μπορείς να κουμαντάρεις. Kι ας είχες<br/>μπάρκο μακρινό σαλπάρει και βαρύ,<br/>άλλον δεν ακούει τούτο το σκαρί.<br/>Του παραγγείλαν μυστική αποστολή<br/>και κίνησε μονάχο του να πάει.</p>"
	},
	{
		idPoeme:2,
		idStrophe:4,
		strophe:"<p>au coucher des Chevreaux dans le ciel ;<br/>nombreux sont ceux qui ont péri ainsi.<br/>Il s’en est allé seul et seul il est revenu.<br/>Va, capitaine, débarder dans un port<br/>fréquenté, expédie ta précieuse charge</p>",
		stropheGr:"<p>Aρμένιζε δίχως ούτ’ ένα ναύτη<br/>κι οι Έριφοι σμίγανε στον ουρανό.<br/>Τόσοι έχασαν έτσι τη ζωή τους<br/>μα ετούτο πήγε κι ήρθε μοναχό.<br/>Kοίταξε, καπετάνιε, σε λιμάνι κοσμικό</p>"
	},
	{
		idPoeme:2,
		idStrophe:5,
		strophe:"<p>par caravane lointaine. Et viens ici :<br/>au rivage désert qui hante ton esprit.<br/>C’est toi qu’attendent mousses et gabiers,<br/>toi qu’habitent les chemins du vent ;<br/>les cétacés t’observent. Il est magique,</p>",
		stropheGr:"<p>να ξεφορτώσεις, στείλε το ακριβό σου μπάρκο<br/>με καραβάνι μακρινό. Mα σύ κόπιασε δώ,<br/>σ’ έρμο γιαλό πούχει το πνεύμα σου στοιχειώσει.<br/>Eσένα περιμένουν μούτσοι και λοστρόμοι,<br/>εσένα κατοικούν και του ανέμου οι δρόμοι</p>"
	},
	{
		idPoeme:2,
		idStrophe:6,
		strophe:"<p>ce bateau, il a fait le tour du monde ;<br/>il sait où le coucher embrasse le levant,<br/>où le revers du jour dans les ténèbres<br/>se perd. Il le connaît, le trésor caché.<br/>Des sirènes le gardent et se sont juré</p>",
		stropheGr:"<p>και τα θαλάσσια κήτη σε κοιτούν. Eίναι<br/>καράβι μαγικό, έχει γυρίσει όλη τη γη,<br/>εκεί που συναντά η Δύση την Ανατολή<br/>και του φωτός ανατροπή χάνεται στα σκότη.<br/>Αυτό γνωρίζει τον κρυμμένο θησαυρό.</p>"
	},
	
	{
		idPoeme:2,
		idStrophe:7,
		strophe:"<p>de te faire perdre la tête. Le fantôme<br/>en mer te suivra. Et ce vaisseau<br/>imprévisible, léger, t’expédiera sans croix.<br/>Ton corps en lambeaux dans les vagues<br/>tanguera sans psaumes et sans glas.</p>",
		stropheGr:"<p>Γοργόνες τον φυλάνε κι έταξαν σκοπό<br/>να σου το πάρουν το μυαλό. Στη θάλασσα<br/>το φάντασμα θα βλέπεις. Kαι τούτο το λαφρύ,<br/>απρόσμενο σκαρί, δίχως σταυρό σε στέλνει.<br/>Δε θ’ ακουστούν για σένα ψαλμωδίες,</p>"
	},	
	{
		idPoeme:2,
		idStrophe:8,
		strophe:"<p>Regagne, capitaine, je t’en supplie,<br/>le rivage humide ; viens exaucer le voeu<br/>avant qu’il ne scelle les mers à jamais.</p>",
		stropheGr:"<p>ούτε καμπάνες θ’ αντηχούν, κουρέλια<br/>lμες στα κύματα το σώμα σου θα παραδέρνει.<br/>Γύρισε καπετάνιε στον υγρό γιαλό,<br/>το τάμα πλήρωσε, να σε χαρώ, προτού<br/>τα πέλαγα αξεδιάλυτα σφραγίσει.</p>"
	
	},
	{
		idPoeme:2,
		idStrophe:9,
		strophe:"<p>Le trésor gémit en secret et le temps<br/>s’apprête à tourner avant que la nuit<br/>ne tombe éternelle.</p>",
		stropheGr:"<p>Bογγά κρυφά ο θησαυρός<br/>κι είναι στο γύρισμα ο καιρός<br/>προτού αιώνια νυχτώσει.</p>"
	},
	{
		idPoeme:2,
		idStrophe:10,
		partie:"II",
		strophe:"<p>J’aime bien les figures de la lune courroucée<br/>qui fume des nuages. J’aime les farfadets<br/>qui glissent sur les rayons furibonds du soleil.</p>",
		stropheGr:"<p>Μ’ αρέσουν οι φιγούρες του θυμωμένου φεγγαριού<br/>καθώς τα σύννεφα φουμάρει. Τα ξωτικά μ’ αρέσουν,<br/>καθώς γλιστρούν επάνω σε οργισμένες ηλιαχτίδες.</p>"
	},
	{
		idPoeme:2,
		idStrophe:11,
		strophe:"<p>Mais quand la rose mortelle pique jusqu’au sang,<br/>gare à qui n’a pas compris la parole du dieu<br/>par la naissance et par la fin des choses.</p>",
		stropheGr:"<p>Μα όταν ρόδου αγκάθι θανατερό ματώσει,<br/>αλίμονο σ’ όποιον το λόγο του θεού δε νιώσει<br/>από τη γέννηση κι από το τέλος των πραγμάτων.</p>"
	},
	{
		idPoeme:2,
		idStrophe:12,
		strophe:"<p>J’aime bien les monstres qui froncent le sourcil<br/>et la faux qui s’abat en luisant sur le champ doré :<br/>sa lame dure épure le fruit trouble des esprits./p>",
		stropheGr:"<p>Μ’ αρέσουνε τα σουφρωμένα φρύδια των τεράτων,<br/>τα δρέπανα που αστραφτοκοπούν θερίζοντας<br/>χρυσαφένιο αγρό: σκληρό λεπίδι καθαρίζει</p>"	
	},
	{
		idPoeme:2,
		idStrophe:13,
		strophe:"<p>Dans ces lieux déserts, les âmes respirent à peine<br/>l’herbe desséchée ; réapparaissent alors les visions<br/>de lumière, riches et blanches, virginales,</p>",
		stropheGr:"<p>το σκοτισμένο καρπό των πνευμάτων. Στις ερημιές<br/ολόξερα χορτάρια θ’ απομείνουν να ανασάνουν<br/>οι ψυχές· σαν οπτασία φωτός ξαναπροβάλλουν</p>"	
	},
	{
		idPoeme:2,
		idStrophe:14,
		strophe:"<p>messes oriflammes d’encens parfumées.<br/>Ne pleure pas ce que tu as perdu, ne regrette pas<br/>ce que tu as laissé, tu obtiendras ce qui a manqué ;</p>",
		stropheGr:"<p>πλούσιες και λευκές, παρθενικές, εξαπτέρυγες<br/>μυρωμένες λειτουργίες. Ό,τι έχασες μην κλάψεις,<br/>ό,τι άφησες μη λυπηθείς και ό,τι έλειψε</p>"
	},
	{
		idPoeme:2,
		idStrophe:15,
		strophe:"<p>mais quand amère encore, au moment d’éclore,<br/>la jeune pousse est coupée, accepte la mutation<br/>de l’âme par la matière revisitée.</p>",
		stropheGr:"<p>θα λάβεις, μόνο μην αρνηθείς πικρό όταν κοπεί<br/>στην άνθηση τ’ ολόφρεσκο βλαστάρι, την αλλαγή,<br/>καθώς μεταμορφώνει από την ύλη την ψυχή.</p>"	
	},
	{
		idPoeme:2,
		idStrophe:16,
		strophe:"<p>Va avec la vague, va avec le vent rejoindre<br/>le lieu de ton départ : ce n’est pas un retour,<br/>c’est une communion, transparence entre l’être</p>",
		stropheGr:"<p>Φύγε με τον άνεμο, φύγε με το κύμα, κι αν πας<br/>lκατακεί που ήρθες, δεν είναι γυρισμός· οι μορφές<br/>είναι που κοινωνούν. Kαι σύ, διάφανη μεμβράνη</p>"	
	},
	{
		idPoeme:2,
		idStrophe:17,
		strophe:"<p>et les dieux. Détrompe l’illusion. Les anges<br/>sont tes fidèles alliés. Ces féroces guerriers<br/>frappent d’instinct sans pitié les membres fluets.</p>",
		strophe:"<p>ανάμεσα στο είναι και στους αθάνατους θεούς.<br/>Mη γελαστείς από τις όψεις. Έχεις αγγέλους<br/>σύμμαχους πιστούς. Eίναι σκληροί πολεμιστάδες,</p>"
	},
	{
		idPoeme:2,
		idStrophe:18,
		strophe:"<p>Laisse les implacables tueurs, instruments du destin,<br/>exécuteurs du temps, tisser le filet prévu par la loi ;<br>l’univers est ainsi accompli. Quand les ancres se lèvent</p>",
		strophe:"<p>αλύπητοι φονιάδες, με ένστικτο που νιώθει<br/>τους ευαίσθητους αρμούς. Άφησε να κεντήσουνε<br>το δίχτυ, καθώς από το νόμο έχει οριστεί.</p>"
	},
	{
		idPoeme:2,
		idStrophe:19,
		strophe:"<p>en grondant, qu’elle pleure, la famille, sur le quai ;<br/>ces yeux mouillés où se glace le sel et se fige<br/>sont par les apparences vite consolés.</p>",
		stropheGr:"<p>Eίν’ όργανα της Tύχης, εκτελεστές του χρόνου και<br/>της γης. Όταν σηκώνονται οι άγκυρες βογγώντας,<br/>άσε να κλάψουν στο λιμάνι οι συγγενείς, τα μάτια</p>"
	},	
	{
		idPoeme:2,
		idStrophe:20,
		strophe:"<p>Va avec le vent et le tonnerre toucher les coraux<br/>écarlates, les nacres qui pleurent leur charogne<br/>et qui puent, va toucher douce, humide, soyeuse,</p>",
		stropheGr:"<p>κείνα που βουρκώνουν στην αλμύρα και παγώνουν<br/>εύκολα ξεχνιούνται με τις εικόνες τις πλαστές.<br/>Φύγε με τον άνεμο και με τις βροντές· κοράλλια</p>"
	},
		{
		idPoeme:2,
		idStrophe:21,
		strophe:"<p>la perle noire du fond secret.</p>",
		stropheGr:"<p>πορφυρά, σεντέφια που βρωμούν και ψοφίμι ακόμα<br/>νοσταλγούν να ’γγίξεις, στιλπνό και απαλό, υγρό,<br/>μαύρο μαργαριτάρι του μυστικού βυθού.</p>"		
	},	
		{
		idPoeme:2,
		idStrophe:22,
		partie:"III",
		strophe:"<p>Je me souviens de toi dans le port :<br/>tu contemplais notre avenir<br/>sur une mer salée.</p>",
		stropheGr:"<p>Στο λιμάνι θυμάμαι ν’ αγναντεύεις<br/>το μέλλον μας σε θάλασσα αλμυρή.</p>"
	},
		{
		idPoeme:2,
		idStrophe:23,
		strophe:"<p>Mais quand tu m’abandonnais dans l’oeil des vents,<br/>tu l’entendais, mon cri, dans les Strophades<br/>où seules les saintes icônes peuvent<br/>d’un bord à l’autre traverser.<br/>Où résonnera-t-elle maintenant, la voix de l’amour ?</p>",
		stropheGr:"<p>Αλλ’ όταν μ’ εγκατέλιπες στο μάτι<br/>των ανέμων, άκουγες την κραυγή μου<br/>στα Στροφάδια, που άγιες μόνον εικόνες<br/>από γιαλό σ’ άλλο γιαλό διαβαίνουν.<br/>Τώρα πού θα βρεις του έρωτα φωνή;</p>"
	},	
	{
		idPoeme:2,
		idStrophe:24,
		strophe:"<p>Les poissons sont bien plus éloquents<br/>que la passion reniée.</p>",
		strophe:"<p>Τα ψάρια μού μιλάνε πιο καλά<br/>απ’ την αγάπη πούχεις αρνηθεί.</p>"

	}
	]

var MainController = function(){
	this.poesie=poeme;
}
app.controller("MainController",MainController);
}());