document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('graphContainer');

  // Vérification de compatibilité du navigateur
  if (!mxClient.isBrowserSupported()) {
    container.innerHTML = '<p>Votre navigateur ne supporte pas cette application.</p>';
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.color = '#ff0000';
    container.style.fontSize = '16px';
    return;
  }

  // Création du graphique
  const graph = new mxGraph(container);

  // Personnalisation de l'apparence du graphique
  graph.setPanning(true);
  graph.setConnectable(true);
  graph.setTooltips(true);

  // Gestion des cellules par défaut
  graph.setCellsEditable(false);

  const parent = graph.getDefaultParent();
  graph.getModel().beginUpdate();

  try {
    // Insertion des éléments
    const user = graph.insertVertex(parent, null, 'Utilisateur', 100, 50, 120, 60, 'fillColor=#D9EAD3;fontColor=#333;');
    const apiFront = graph.insertVertex(parent, null, 'API Front', 300, 50, 160, 60, 'fillColor=#D0E0FF;fontColor=#333;');
    const apiBack = graph.insertVertex(parent, null, 'API Back', 600, 50, 180, 60, 'fillColor=#FFE599;fontColor=#333;');
    const apiContacts = graph.insertVertex(parent, null, 'API Contacts', 900, 50, 140, 60, 'fillColor=#F6CECE;fontColor=#333;');

    // Insertion des connexions
    graph.insertEdge(parent, null, 'Connexion', user, apiFront);
    graph.insertEdge(parent, null, 'Interaction', apiFront, apiBack);
    graph.insertEdge(parent, null, 'Requête', apiBack, apiContacts);
  } finally {
    graph.getModel().endUpdate();
  }
});
