using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using WeifenLuo.WinFormsUI.Docking;
using Mobik.Panels;

namespace Mobik
{
    public partial class Main : Form
    {
        public Main()
        {
            InitializeComponent();
            Tools t = new Tools();
            t.Show(dockPanel1, DockState.DockLeft);
            designer f3 = new designer();
            f3.Show(dockPanel1, DockState.DockRight);
            Editor f4 = new Editor();
            f4.Show(dockPanel1, DockState.Document);
        }

        private void Main_Load(object sender, EventArgs e)
        {

        }
    }
}
