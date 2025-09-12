
import React, { useState, useEffect } from 'react';
import type { Scheme, Translations } from '../types';

interface UploadSectionProps {
  schemes: Scheme[];
  t: Translations;
}

const UploadSection: React.FC<UploadSectionProps> = ({ schemes, t }) => {
  const [selectedScheme, setSelectedScheme] = useState<number>(schemes[0]?.id || 1);
  const [files, setFiles] = useState<File[]>([]);
  const [progress, setProgress] = useState<number>(0);
  const [uploading, setUploading] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    // Cleanup object URL to prevent memory leaks
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Revoke the old object URL if it exists
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }

    if (e.target.files && e.target.files.length > 0) {
      const fileList = Array.from(e.target.files);
      setFiles(fileList);

      // Find the first image file and create a preview URL
      const firstImageFile = fileList.find(file => file.type.startsWith('image/'));
      if (firstImageFile) {
        setImagePreview(URL.createObjectURL(firstImageFile));
      } else {
        setImagePreview(null);
      }
    } else {
        setFiles([]);
        setImagePreview(null);
    }
  };

  const handleUpload = () => {
    if (files.length === 0) {
      alert('Please select files to upload.');
      return;
    }
    setUploading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setUploading(false);
          setTimeout(() => {
            alert('Files uploaded successfully (simulated). In a real app, this would be a server response.');
            setFiles([]); // Clear files after upload
            if (imagePreview) {
              URL.revokeObjectURL(imagePreview);
              setImagePreview(null);
            }
          }, 250);
          return 100;
        }
        return p + Math.floor(Math.random() * 20) + 10;
      });
    }, 400);
  };

  return (
    <section id="upload" className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-3xl font-bold mb-2 text-red-900">{t.uploadDocs}</h2>
      <p className="text-gray-600 mb-6">{t.uploadHint}</p>

      <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-2xl mx-auto">
        <div className="space-y-6">
          <div>
            <label htmlFor="scheme-select" className="block text-sm font-medium text-gray-700 mb-1">{t.selectScheme}</label>
            <select
              id="scheme-select"
              value={selectedScheme}
              onChange={(e) => setSelectedScheme(Number(e.target.value))}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              {schemes.map((s) => (
                <option value={s.id} key={s.id}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700">{t.attachFiles}</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="file-input" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                    <span>Upload a file</span>
                    <input id="file-input" name="file-input" type="file" multiple className="sr-only" onChange={handleFileChange} accept="image/*,application/pdf" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
              </div>
            </div>
          </div>
          
          {files.length > 0 && (
            <div>
              {imagePreview && (
                  <div className="my-4 text-center">
                      <p className="text-sm font-medium text-gray-700 mb-2">Image Preview:</p>
                      <img 
                          src={imagePreview} 
                          alt="Uploaded preview" 
                          className="max-h-48 w-auto inline-block rounded-lg shadow-md object-contain" 
                      />
                  </div>
              )}
              <h4 className="font-semibold text-gray-700">{t.files}:</h4>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-600 space-y-1">
                {files.map((f) => (
                  <li key={f.name}>
                    {f.name} — <span className="font-mono">{(f.size / 1024).toFixed(1)} KB</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="space-y-4">
            <button 
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400" 
              onClick={handleUpload} 
              disabled={uploading}
            >
              {uploading ? t.uploading : t.uploadBtn}
            </button>

            {uploading && (
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-yellow-500 h-2.5 rounded-full transition-all duration-300 ease-linear" style={{ width: `${Math.min(progress, 100)}%` }}></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
