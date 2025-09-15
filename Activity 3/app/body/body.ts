import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: false,
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {
  overview = 'The KB-X1000 is a high-performance mechanical keyboard designed for gamers, professionals, and everyday users. It features customizable RGB backlighting, durable switches, and programmable keys.';

  specs = {
    switch: 'Cherry MX Red (Mechanical)',
    layout: 'Full-size (104 keys)',
    backlight: 'RGB customizable',
    connectivity: 'Wired (USB 2.0)',
    dimensions: '440 mm x 135 mm x 35 mm',
    weight: '1.2 kg',
    cable: '1.8 meters',
    features: 'Anti-ghosting, N-key rollover, dedicated media controls'
  };

  boxItems = [
    'KB-X1000 Keyboard',
    'USB Cable',
    'User Manual',
    'Keycap Removal Tool',
    'Warranty Card'
  ];

  features = [
    'Customizable RGB Backlighting',
    'Mechanical Switches (Cherry MX Red)',
    'Programmable Keys',
    'Anti-Ghosting & N-Key Rollover',
    'Dedicated Media Controls'
  ];

  setup = [
    'Unbox the keyboard and accessories.',
    'Plug the USB cable into your computer.',
    'Install optional software from manufacturer’s website.',
    'Use the keycap tool for removal and replacement.'
  ];

  usage = [
    'Start typing immediately with standard key mappings.',
    'Press Fn + F9 to cycle lighting modes.',
    'Use software to program keys and macros.',
    'Control media with dedicated media keys.'
  ];

  troubleshooting = [
    'Keyboard Not Responding: Check USB, try another port, restart PC.',
    'Backlighting Not Working: Verify brightness and software.',
    'Key Not Registering: Check for obstructions, test in other apps.'
  ];

  maintenance = [
    'Disconnect before cleaning.',
    'Wipe surface with soft, dry cloth.',
    'Remove keycaps and use compressed air for deep cleaning.',
    'Store in a cool, dry place.'
  ];

  warranty = {
    period: '2 years from purchase',
    support: 'support@keyboardcompany.com',
    hotline: '1-800-555-1234',
    website: 'www.keyboardcompany.com'
  };
}

