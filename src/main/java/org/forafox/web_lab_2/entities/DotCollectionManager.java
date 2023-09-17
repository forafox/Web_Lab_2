package org.forafox.web_lab_2.entities;

import java.util.LinkedList;
import java.util.List;

public class DotCollectionManager {
    private List<Dot> collection = new LinkedList<>();
    public void add(Dot dot){
        collection.add(dot);
    }
    public void clear(){
        collection.clear();
    }
    public List<Dot> getCollection(){
        return collection;
    }
    public Dot getLast(){ return collection.get(collection.size()-1); }

    public boolean isEmpty(){
        return collection.size()==0;
    }
}
