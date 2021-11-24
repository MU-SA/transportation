export default class {
  constructor(area) {
    this.name = area.name;
    this.id = area.id;
    this.is_active = true;
  }

  update_name = (name) => {
    this.name = name;
  };

  delete_area = () => {
    this.is_active = false;
  };
}
