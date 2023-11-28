$('[type="file"]').ezdz({
  text: 'Unggah Gambar',
  validators: {
    maxWidth: 1280,
    maxHeight: 1280
  },
  reject: function(file, errors) {
    if (errors.mimeType) {
      alert(file.name + ' harus berupa gambar!');        
    }
    if (errors.maxWidth) {
      alert(file.name + ' harus lebar: 1280px maksimal');        
    }
    if (errors.maxHeight) {
      alert(file.name + ' harus tinggi: 1280px maksimal');        
    }
  }
});
