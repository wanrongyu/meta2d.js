new Le5le.Topology('topology');

var stats = new Stats();
stats.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom);

function animate() {
  stats.begin();

  // monitored code goes here

  stats.end();

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

function makeNodes() {
  topology.clear();

  const count = +document.getElementById('count').value || 10000;
  let x = 100;
  let y = 100;
  console.time('makeNodes');
  for (let i = 0; i < count; i++) {
    topology.addPen(
      {
        name: i % 2 ? 'rectangle' : 'circle',
        x,
        y,
        width: 100,
        height: 100,
        text: i % 100 === 0 ? '乐吾乐\nTopology' : undefined,
        image: 'btn.svg',
        icon: '\ue8e7',
        iconFamily: 't-icon',
        iconSize: 20,
        ellipsis: true,
        // textBackground: '#eeeeee',
        // textAlign: 'right',
        // textBaseline: 'bottom',
      },
      false
    );
    x += 150;
    if (i && i % 20 === 0) {
      x = 100;
      y += 150;
    }
  }
  console.timeEnd('makeNodes');
}